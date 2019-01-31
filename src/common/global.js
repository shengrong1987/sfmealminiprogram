/*
    Global： 全局Model类，负责读写数据和其他数据逻辑
    @getMeal : 按id读取菜单
    @setMeal : 写入菜单
    @setTags : 根据菜单设置tags
    @getTags : 获取tags
    @setDates : 根据菜单设置dates
    @getDates : 获取dates
    @getOrder : 按id获取订单
    @setOrder : 写入订单
*/
import m_meals from '../model/meal'
import m_orders from '../model/order'

import wepy from 'wepy'
import moment from 'moment'
import api from './api'

export default {
    humanizeDate : function(date){
      var date = moment(date).hours(0)
      var dateDesc = "unknown"
      if(date.isSame(moment(),'day')){
        dateDesc = 'today'
      }else if(date.isSame(moment().add(1,'days'),'day')){
        dateDesc = 'tomorrow'
      }else if(moment.duration(date.diff(moment())).asDays() <= 7){
        dateDesc = date.format('dddd')
      }else{
        dateDesc = date.format('[day]M/D')
      }
      return dateDesc
    },
    async combinePickupOptions (zipcode) {
      let pickupOptions = await api.getPickupOptions(zipcode)
      var combinedPickupOptions = []
      pickupOptions.forEach((option) => {
        var optionExist;
        combinedPickupOptions.forEach((optionset, index) => {
          if(option.publicLocation === optionset.title){
           optionset.options.push(option)
           optionExist = true
          }
        })
        if(!optionExist){
          combinedPickupOptions.push({ title : option.publicLocation, options : [option]})
        }
      })
      return combinedPickupOptions
    },
    async getMealByPickupNickname (nickname) {
      let meals = await api.getMeals()
      meals = meals.filter((meal) => {
        return meal.pickups.some((pickup) => {
          return pickup.nickname === nickname;
        })
      })
      return meals
    },
    getDataFromMeals (meals) {
      var _this = this
      var dishes = [],tags = [], dates = [], hosts = []
      meals.forEach((meal) => {
        if(!hosts.some((host) => {
          return host.id === meal.chef.id
        })){
          hosts.push(meal.chef)
        }
        meal.dishes.forEach((dish) => {
          if(!dishes.some((d) => {
            return d._id === dish._id
          })){
            dishes.push(dish)
          }
          if(dish.tags){
            dish.tags.forEach((tag) => {
              if(!tags.includes(tag)){
                tags.push(tag)
              }
            })
          }
          var dateDesc = _this.humanizeDate(meal.pickups[0].pickupFromTime)
          if(!dates.includes(dateDesc)){
            dates.push(dateDesc)
          }
        })
      })
      return { dishes: dishes, tags: tags, dates: dates, hosts: hosts}
    },
    getMeal (id) {
      if(this._meal){
        return id ? this._meal[id] : this._meal
      } else {
        let mealObj = {}
        m_meals.forEach((v) => {
          mealObj[v.id] = v    
        })
        this._meal = mealObj
        return this.getMeal(id)
      }
    },
    setMeal (k, v) {
      if (v) {
        if (this._meal) {
          this._meal[k] = v
        }else {
          this._meal = {}
          this._meal[k] = v
        }
      } else {
        this._meal = k
      }
    },
    setTags () {
      if(m_meals) {
        let tags = []
        m_meals.forEach((m) => {
          m.dishes.forEach((d) => {
            if(!tags.includes(d.tag)) {
              tags.push(d.tag)
            }
          })
        })
        this._tags = tags
      }else{
        this._tags = []
      }
    },
    getTags () {
      if(this._tags) {
        return this._tags
      }else {
        this.setTags()
        return this.getTags()
      }
    },
    setDates () {
      if(m_meals) {
        let dates = []
        m_meals.forEach((m) => {
          let hasDate = dates.some((d) => {
            moment(d).dayOfYear() === moment(m.provideFromTime).dayOfYear()
          })
          if(!hasDate) {
            dates.push(m.provideFromTime)
          }
        })
        this._dates = dates
      }else {
        this._dates = []
      }
    },
    getDates () {
      if(this._dates) {
        return this._dates
      }else {
        this.setDates()
        return this.getDates()
      }
    },
    getOrder (id) {
        if (this._order){
          return id ? this._order[id] : this._order
        } else {
          let orderObj = {}
          m_orders.forEach((v) => {
              orderObj[v.id] = v
          })
          this._order = orderObj
          return this.getOrder(id)
        }
    },
    setOrder (k, v) {
      if (v) {
        if (this._order) {
          this._order[k] = v
        } else {
          this._order = {}
          this._order[k] = v
        }
      } else {
        this._meal = k
      }
    }
}