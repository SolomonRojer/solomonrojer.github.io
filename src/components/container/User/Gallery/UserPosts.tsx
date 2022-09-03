import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import {
  ImageListItemBar,
  IconButton,
  Typography,
  Fade,
  Chip,
  Avatar,
} from '@mui/material'
import { Delete, Star } from '@mui/icons-material'
import { useProfileStyles } from '../Profile/UserProfileStyle'
import { stringToColor } from '../../../../utils/common/StringToColor'
import type { UserPostsProps } from './userDataProps'
import { PostInitialData } from '../../../../constants/Data/InitialData'
import ViewPost from '../../ViewItems/Post/ViewPostMD'
import type { PostData } from '../../../../utils/common/PropTypes'
import { useNavigate } from 'react-router-dom'
import AlertDialog from '../../../presentational/AlertDialog/ConfirmationDialog'

const UserPosts: React.FC<UserPostsProps> = ({
  typeOfItem = 'userpost',
  dataItems = [],
  cols = 4,
  view = 'md',
}) => {
  const classes = useProfileStyles()
  const navigate = useNavigate()

  const [viewItem, setViewItem] = React.useState(false)
  const [alertDialog, setAlertDialog] = React.useState(false)

  const [viewPostItem, setViewPostItem] = React.useState<PostData>(
    PostInitialData,
  )

  const handleOnClickPost = (item: PostData) => {
    setViewPostItem(item)
    view === 'md'
      ? setViewItem(true)
      : navigate('/view', {
          state: { type: 'post', item: dataItems, id: '1', editable: true },
        })
  }

  const RemovePostConfirmation = (id: string) => {
    setAlertDialog(true)
  }

  const RemovePost = () => {
    // remove with removeId
    setAlertDialog(false)
  }

  return (
    <div>
      <ImageList
        sx={{ width: '100%', marginBottom: view === 'xs' ? '4rem' : 0 }}
        variant="quilted"
        cols={cols}
      >
        {dataItems.map((item, i) => (
          <Fade
            in={true}
            style={{ transitionDelay: view === 'md' ? `${100 * i}ms` : '0' }}
            key={item.id}
          >
            <ImageListItem key={item.title}>
              <img
                src={`${item.images[0]}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleOnClickPost(item)}
                style={{ cursor: 'pointer' }}
              />
              {cols === 4 && (
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  title={
                    <Typography
                      sx={{ fontSize: 12 }}
                      align={typeOfItem === 'userpost' ? 'left' : 'right'}
                    >
                      {item.title}
                    </Typography>
                  }
                  subtitle={
                    <Typography
                      sx={{ fontSize: 10 }}
                      align={typeOfItem === 'userpost' ? 'left' : 'right'}
                    >
                      {item.date}
                    </Typography>
                  }
                  position="top"
                  actionIcon={
                    typeOfItem === 'userpost' ? (
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        sx={{ color: 'rgba(255,255,255,0.5)' }}
                        onClick={() => RemovePostConfirmation(item.title)}
                      >
                        <Delete />
                      </IconButton>
                    ) : (
                      <Chip
                        onClick={() => navigate('/profile')}
                        style={{ cursor: 'pointer' }}
                        avatar={
                          <Avatar
                            src={item?.profile}
                            alt={item?.author}
                            sx={{
                              bgcolor: stringToColor(item?.author as string),
                            }}
                          />
                        }
                        label={
                          <Typography
                            className={classes.UserName}
                            color="secondary"
                            sx={{
                              fontSize: 12,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {item?.userType === 'admin' ? (
                              <>
                                <Typography
                                  sx={{ fontSize: 12 }}
                                  color="info.main"
                                >
                                  Pet-Tech
                                </Typography>
                                <Star sx={{ fontSize: 14 }} color="warning" />
                              </>
                            ) : (
                              item?.author
                            )}
                          </Typography>
                        }
                        sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                      />
                    )
                  }
                  actionPosition={typeOfItem === 'userpost' ? 'right' : 'left'}
                />
              )}
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
      {viewItem && (
        <ViewPost open={viewItem} setOpen={setViewItem} item={viewPostItem} />
      )}
      {alertDialog && (
        <AlertDialog
          alertDialog={alertDialog}
          setAlertDialog={setAlertDialog}
          handleConfirm={RemovePost}
        />
      )}
    </div>
  )
}

export default UserPosts
