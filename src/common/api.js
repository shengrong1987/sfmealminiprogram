/*
    API： 通过HTTP请求调用后台API，方法与后台API一一对应
    @getMeals : 获取菜单列表
    @getUsers : 获取用户列表
    @getOrders : 获取订单列表
    注：暂时使用模拟的静态数据 (m_meals, m_users, m_orders）
*/
import m_meals from '../model/meal'
import m_users from '../model/user'
import m_orders from '../model/order'

import wepy from 'wepy'

export default {
    getMeals () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m_meals)
            })
        })
    },

    getUsers () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m_users)
            })
        })
    },

    getOrders () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m_orders)
            })
        })
    }
}