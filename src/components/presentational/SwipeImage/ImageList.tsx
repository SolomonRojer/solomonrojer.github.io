import React, { useEffect, useState } from 'react'
import { Box, Fab, CardMedia, Stack } from '@mui/material'
import {
  AddPhotoAlternate,
  AddRounded,
  CancelRounded,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material'

type SwipeImageProps = {
  images: string[]
  height?: string
  width?: string
  removeImage?: (index: number) => void
  chooseImage?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  length?: number
  showBorder?: boolean
}

const SwipeImage: React.FC<SwipeImageProps> = ({
  images,
  height = 25,
  width = 25,
  removeImage,
  chooseImage,
  type = 'view',
  length = 5,
  showBorder = true,
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const onChangeImage = (direction: string) => {
    if (direction === 'right')
      setImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
    else if (direction === 'left')
      setImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  useEffect(() => {
    if (type === 'edit') setImageIndex(images.length ? images.length - 1 : 0)
  }, [images, type])

  return (
    <Box>
      <Box style={{ position: 'relative' }}>
        {images?.length ? (
          <CardMedia
            component="img"
            sx={{
              width: width,
              height: height,
              objectFit: 'cover',
            }}
            image={images[imageIndex]}
            alt="Pet unavailable.."
          />
        ) : (
          <Box
            sx={{
              width: width,
              height: height,
              border: showBorder ? 1 : 0,
              borderRadius: showBorder ? 1 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AddPhotoAlternate sx={{ fontSize: 72 }} color="disabled" />
          </Box>
        )}
        {type === 'view' && (
          <>
            <Fab
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                backgroundColor:
                  imageIndex === 0
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0.5)',
              }}
              size="small"
              onClick={() => onChangeImage('left')}
            >
              <ChevronLeft
                color={imageIndex === 0 ? 'disabled' : 'secondary'}
              />
            </Fab>
            <Fab
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                backgroundColor:
                  !images.length || imageIndex === images.length - 1
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0.5)',
              }}
              size="small"
              onClick={() => onChangeImage('right')}
            >
              <ChevronRight
                color={
                  !images.length || imageIndex === images.length - 1
                    ? 'disabled'
                    : 'secondary'
                }
              />
            </Fab>
          </>
        )}
      </Box>
      {type === 'edit' && (
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '95%',
          }}
        >
          <Stack direction="row" sx={{ marginTop: '3%' }} columnGap={1}>
            {images?.map((item, i) => (
              <Box
                style={{ position: 'relative', height: '2.6rem' }}
                sx={{ borderBottom: i === imageIndex ? 1 : 0 }}
              >
                {removeImage && (
                  <CancelRounded
                    color="error"
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      cursor: 'pointer',
                      zIndex: 1,
                      fontSize: '0.7rem',
                    }}
                    onClick={() => removeImage(i)}
                  />
                )}
                <img
                  src={item}
                  alt="Loading.."
                  style={{
                    height: '2.5rem',
                    maxWidth: '3rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => setImageIndex(i)}
                />
              </Box>
            ))}

            {images.length < length && chooseImage && (
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Fab component="label" size="small">
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    multiple
                    onChange={chooseImage}
                  />
                  <AddRounded />
                </Fab>
              </Box>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default SwipeImage
