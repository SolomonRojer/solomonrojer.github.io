import { Box, Typography } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectData, setState } from '../../../store/Slice/NavigationSlice'
import { PostData, SalesData } from '../../../utils/common/PropTypes'
import { Sale } from '../Home/Product/Sale'
import { Post } from '../Home/Product/Posts'
import { useLocation } from 'react-router'

interface TabPanelProps {
  children?: React.ReactNode
  type: string
  value: string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, type, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== type}
      id={`vertical-tabpanel-${type}`}
      aria-labelledby={`vertical-tab-${type}`}
      {...other}
    >
      {value === type && <Typography>{children}</Typography>}
    </div>
  )
}
interface ViewPostOrSaleProps {
  type: string
  item: PostData[] | SalesData[]
  id: string
  editable: boolean
}

const ViewPostOrSale: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const header = useAppSelector(selectData)
  const location = useLocation()
  const state = location.state as ViewPostOrSaleProps

  React.useEffect(() => {
    let headerValue = 0,
      headerTitle = ''

    if (state.type === 'post') {
      headerValue = 3
      headerTitle = 'Posts'
    } else {
      headerValue = 4
      headerTitle = 'Sales'
    }
    if (!state.editable) headerValue = 5

    dispatch(setState({ prevValue: header.value, value: headerValue }))
    dispatch(setState({ headerTitle }))
  }, [state, dispatch, header.value])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [state])

  return (
    <Box style={{ marginTop: '1%', position: 'relative' }}>
      <TabPanel value={state.type} type="post">
        <Box style={{ marginTop: '10%', marginBottom: '15%' }}>
          <Post
            view="xs"
            PostItems={state.item as PostData[]}
            type={state.editable}
          />
        </Box>
      </TabPanel>
      <TabPanel value={state.type} type="sale">
        <Box style={{ marginBlock: '13%' }}>
          <Sale
            view="xs"
            salesItems={state.item as SalesData[]}
            type={state.editable}
          />
        </Box>
      </TabPanel>
    </Box>
  )
}

export default ViewPostOrSale
