import { basicMovementInfo, basicMovementPreview } from './characters/common/basicMovement.skill'
import { auraInfo, auraPreview } from './characters/sample/aura.skill'
import { attack1Info, attack1Preview } from './characters/sample/attack1.skill'

const skillPreviews = new Map()
skillPreviews.set(basicMovementInfo.code, basicMovementPreview)
skillPreviews.set(auraInfo.code, auraPreview)
skillPreviews.set(attack1Info.code, attack1Preview)

export default skillPreviews