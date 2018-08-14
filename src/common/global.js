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

export default {
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