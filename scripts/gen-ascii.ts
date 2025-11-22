import fsp from 'node:fs/promises'

import { createCanvas } from 'canvas'
import { intToRGBA, Jimp } from 'jimp'

const INPUT_IMAGE = './public/favicon.jpg'
const OUTPUT_PATH = 'public/avatar-ascii.png'
const RESOLUTION_WIDTH = 120
const BRIGHTNESS = 1.5
const FONT_SIZE = 12
const FONT_FAMILY = '"Courier New", monospace'

// Generate ascii avatar
async function generate() {
  console.log(`🔵 Processing ${INPUT_IMAGE}...`)

  try {
    const image = await Jimp.read(INPUT_IMAGE)

    const FONT_ASPECT_RATIO = 0.55
    const resHeight = Math.floor((image.bitmap.height / image.bitmap.width) * RESOLUTION_WIDTH * FONT_ASPECT_RATIO)

    console.log(`   Sampling resolution: ${RESOLUTION_WIDTH} x ${resHeight}`)
    image.resize({ w: RESOLUTION_WIDTH, h: resHeight })

    const tempCanvas = createCanvas(100, 100)
    const tempCtx = tempCanvas.getContext('2d')
    tempCtx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`
    const charWidth = tempCtx.measureText('W').width
    const charHeight = FONT_SIZE

    const finalWidth = Math.ceil(RESOLUTION_WIDTH * charWidth)
    const finalHeight = Math.ceil(resHeight * charHeight)

    console.log(`   Final image size: ${finalWidth}px x ${finalHeight}px`)

    const canvas = createCanvas(finalWidth, finalHeight)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, finalWidth, finalHeight)

    ctx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`
    ctx.textBaseline = 'top'

    const chars = ' .:-=+*#%@'

    for (let y = 0; y < resHeight; y++) {
      for (let x = 0; x < RESOLUTION_WIDTH; x++) {
        const color = intToRGBA(image.getPixelColor(x, y))

        const r = Math.min(255, Math.floor(color.r * BRIGHTNESS))
        const g = Math.min(255, Math.floor(color.g * BRIGHTNESS))
        const b = Math.min(255, Math.floor(color.b * BRIGHTNESS))
        const a = color.a

        if (a < 50)
          continue

        const gray = (0.2126 * r) + (0.7152 * g) + (0.0722 * b)
        const charIndex = Math.floor((gray / 255) * (chars.length - 1))
        const char = chars[charIndex]!

        if (char === ' ')
          continue

        ctx.fillStyle = `rgb(${r},${g},${b})`

        ctx.fillText(char, x * charWidth, y * charHeight)
      }
    }

    const buffer = canvas.toBuffer('image/png')
    fsp.writeFile(OUTPUT_PATH, buffer)
    console.log(`✅ SUCCESS: Generated ascii png at ${OUTPUT_PATH}`)
  }
  catch (error) {
    console.error('❌ Error:', error)
  }
}

generate()
