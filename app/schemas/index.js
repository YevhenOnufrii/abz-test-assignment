import * as yup from 'yup'
import { getImageProperties } from '../utils/getImageProperties'

const emailRules =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
const phoneRules = /^[\+]{0,1}380([0-9]{9})$/gi

const validImageFormats = ['image/jpeg', 'image/jpg']
const validFileSize = 5 * 1_000_000

const REQUIRE_IMAGE_WIDTH = 70 //px
const REQUIRE_IMAGE_HEIGHT = 70 //px

// custom validation method
const imageDimensionCheck = yup.addMethod(
  yup.mixed,
  'imageDimensionCheck',
  function (message, requireWidth, requireHeight) {
    return this.test('image-width-height-check', message, async function (value) {
      const { path, createError } = this

      if (!value) return

      const imageDimensions = await getImageProperties(value)
      if (imageDimensions.width < requireWidth || imageDimensions.height < requireHeight) {
        return createError({
          path,
          message: `Minimum size of photo ${requireWidth} x ${requireHeight} px`,
        })
      }
      return true
    })
  }
)

export const validSchema = yup.object().shape({
  name: yup.string().min(2).max(60).typeError('user name, should be 2-60 characters').required(),
  email: yup.string().min(2).max(100).matches(emailRules, 'must be a valid mail').required(),
  phone: yup
    .string()
    .max(13)
    .matches(phoneRules, 'number should start with code of Ukraine +380')
    .required(),
  position_id: yup.number().required(),
  photo: yup
    .mixed()
    .required('this field is required')
    .test('fileSize', 'your file is too large :(', value => value && value.size <= validFileSize)
    .test(
      'validFormats',
      'Invalid format. Valid formats: jpeg, jpg',
      value => value && validImageFormats.includes(value.type)
    )
    .imageDimensionCheck('test', REQUIRE_IMAGE_WIDTH, REQUIRE_IMAGE_HEIGHT),
})
