import * as yup from 'yup'

const yupDefaultWallWidthValidator = yup
  .number()
  .min(1)
  .max(15)
  .required()
  .notOneOf([0])

const yupDefaultWallHeightValidator = yup
  .number()
  .min(2.2)
  .max(15)
  .required()
  .notOneOf([0])

export const WallsMeasurementsSchema = yup.object({
  fourthWallHeight: yupDefaultWallHeightValidator.test(
    'fourthWallValidation',
    'the area of the fourth wall must be between 1 and 15',
    (value, context) => {
      const fourthWallArea = context.parent.fourthWallWidth * value!
      return fourthWallArea >= 1 && fourthWallArea <= 15
    }
  ),
  fourthWallWidth: yupDefaultWallWidthValidator,

  thirdWallHeight: yupDefaultWallHeightValidator.test(
    'thirdWallValidation',
    'the area of the third wall must be between 1 and 15',
    (value, context) => {
      const thirdWallArea = context.parent.thirdWallWidth * value!
      return thirdWallArea >= 1 && thirdWallArea <= 15
    }
  ),
  thirdWallWidth: yupDefaultWallWidthValidator,

  secondWallHeight: yupDefaultWallHeightValidator.test(
    'secondWallValidation',
    'the area of the second wall must be between 1 and 15',
    (value, context) => {
      const secondWallArea = context.parent.secondWallWidth * value!
      return secondWallArea >= 1 && secondWallArea <= 15
    }
  ),
  secondWallWidth: yupDefaultWallWidthValidator,

  firstWallHeight: yupDefaultWallHeightValidator.test(
    'firstWallValidation',
    'the area of first wall must be between 1 and 15',
    (value, context) => {
      const firstWallArea = context.parent.firstWallWidth * value!
      return firstWallArea >= 1 && firstWallArea <= 15
    }
  ),
  firstWallWidth: yupDefaultWallWidthValidator,
})