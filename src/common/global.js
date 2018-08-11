/*
    Global： 全局Model类，负责读写数据和其他数据逻辑
    @getMeal : 按id读取菜单
    @setMeal : 写入菜单
    @getOrder : 按id获取订单
    @setOrder : 写入订单
*/
import m_meals from '../model/meal'
import m_orders from '../model/order'

import wepy from 'wepy'

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