import api from '../request/index.js'

const getSeries = (params) => {
  return api.request({
    url: 'productType/list',
    data: params,
    method: 'GET'
  })
}

const getProductList = (params) => {
  console.log(params)
 return api.request({
   url:'product/list',
   data:{...params},
   method: 'GET',
  })

}
const selectList = (params) => {
  return api.request({ //
    url: 'product/list',
    data: params,
    method: 'GET'
  })
}

const productDetail = (params) => {
  return api.request({ //
    url: 'product/detail',
    data: params,
    method: 'GET'
  })
}

const shareInfo = (params) => {
  return api.request({ //
    url: 'PreviewShare/insert',
    data: params,
    method: 'POST',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
export default { getProductList, getSeries, selectList, productDetail, shareInfo}