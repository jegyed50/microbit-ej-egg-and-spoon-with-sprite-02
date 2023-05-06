/**
 * microbit-ej-egg-and-spoon-with-sprite-02
 */
let accY = 0
let accX = 0
led.setBrightness(25)
music.setVolume(255)
let x = 2
let y = 2
let egg = game.createSprite(x, y)
egg.change(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    egg.set(LedSpriteProperty.X, x)
    egg.set(LedSpriteProperty.Y, y)
    if (egg.isTouchingEdge()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 880, 1760, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1760, 880, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        egg.ifOnEdgeBounce()
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1760, 880, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX < -150 && x > 0) {
        x += -1
    } else if (accX > 150 && x < 4) {
        x += 1
    }
    if (accY < -150 && y > 0) {
        y += -1
    } else if (accY > 150 && y < 4) {
        y += 1
    }
    basic.pause(300)
    basic.clearScreen()
})
