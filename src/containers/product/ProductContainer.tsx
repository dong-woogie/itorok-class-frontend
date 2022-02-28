import { useQuery, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from 'tailwindcss/colors'
import ProductDatePicker from '../../components/product/ProductDatePicker'
import ProductFooter from '../../components/product/ProductFooter'
import ProductHeader from '../../components/product/ProductHeader'
import ProductPhotos from '../../components/product/ProductPhotos'
import ProductSummary from '../../components/product/ProductSummary'
import ProductTimeSchedules from '../../components/product/ProductTimeSchedules'
import ProductTitleArea from '../../components/product/ProductTitleArea'
import MarkdownRender from '../../components/write/MarkdownRender'
import { GET_PRODUCT, GET_PRODUCT_SCHEDULES } from '../../lib/graphql'
import { getProductQuery, getProductQueryVariables } from '../../__generated__/getProductQuery'
import {
  getProductSchedulesQuery,
  getProductSchedulesQueryVariables,
} from '../../__generated__/getProductSchedulesQuery'

interface ProductContainerProps {
  productId: string
}

const Divide = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[200]};
`

function ProductContainer({ productId }: ProductContainerProps) {
  const { data } = useQuery<getProductQuery, getProductQueryVariables>(GET_PRODUCT, {
    variables: { input: { productId } },
  })

  const [getProductSchedulesQuery, { data: getProductSchedulesData, loading: getProductScheduleLoading }] =
    useLazyQuery<getProductSchedulesQuery, getProductSchedulesQueryVariables>(GET_PRODUCT_SCHEDULES, {
      ssr: false,
    })

  const [scheduleId, setScheduleId] = useState<string>('')

  const onSelect = (selectedScheduleId: string) => {
    setScheduleId(selectedScheduleId)
  }

  useEffect(() => {
    if (!data) return
    if (scheduleId) return

    setScheduleId(data.getProduct.product.schedules[0].id)
  }, [data])

  useEffect(() => {
    if (!scheduleId) return
    getProductSchedulesQuery({
      variables: { input: { scheduleId } },
    })
  }, [scheduleId])

  return (
    <>
      <ProductHeader />
      <div className="flex-1 overflow-scroll py-16 none-scrollbar">
        <ProductPhotos photos={data?.getProduct.product.photos || []} />
        <ProductTitleArea
          title={data?.getProduct.product.title || ''}
          categoryName={data?.getProduct.product.category.name || ''}
        />

        <Divide className="my-2" />

        <ProductSummary
          address={data?.getProduct.product.address || ''}
          learningTime={data?.getProduct.product.learningTime}
          minPerson={data?.getProduct.product.minPerson || 0}
          maxPerson={data?.getProduct.product.maxPerson || 0}
          isParking={!!data?.getProduct.product.isParking}
        />

        <Divide className="my-2" />

        <ProductDatePicker
          className="py-2 px-4"
          schedules={data?.getProduct.product.schedules || []}
          selectedId={scheduleId}
          onSelect={onSelect}
        />

        <Divide className="my-2" />

        <ProductTimeSchedules
          scheduleTimes={getProductSchedulesData?.getProductSchedules.scheduleTimes || []}
          loading={getProductScheduleLoading}
        />

        <Divide className="my-2" />

        <div className="py-2 px-4">
          <div className="mb-2 text-lg font-bold">클래스 소개</div>
          <MarkdownRender markdown={data?.getProduct.product.introduce || ''} className="text-sm" />
        </div>

        <div className="py-2 px-4">
          <div className="mb-2 text-lg font-bold">커리큘럼</div>
          <MarkdownRender markdown={data?.getProduct.product.curriculum || ''} className="text-sm" />
        </div>

        <ProductFooter price={data?.getProduct.product.price || 0} />
      </div>
    </>
  )
}

export default ProductContainer
