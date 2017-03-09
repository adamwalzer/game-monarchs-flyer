import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    let images = [
    ['wind', `${CMWN.MEDIA.IMAGE}img.wind.png`],
    ['water', `${CMWN.MEDIA.IMAGE}img.waterdrop.png`],
    ['web', `${CMWN.MEDIA.IMAGE}img.spiderweb.png`],
    ['log', `${CMWN.MEDIA.IMAGE}img.log.png`],
    ['leaf', `${CMWN.MEDIA.IMAGE}img.leaf.png`],
    ['egg', `${CMWN.MEDIA.IMAGE}img.egg.png`],
    ['cloud', `${CMWN.MEDIA.IMAGE}img.cloud.png`],
    ];

    if (this.opts.level) {
        images.push(['sky', `${CMWN.MEDIA.IMAGE}level0${this.opts.level}.panorama.jpg`]);
    }

    loadAssets.call(this, 'image', images);

    loadAssets.call(this, 'spritesheet', [
    ['wood', `${CMWN.MEDIA.SPRITE}sprite.logs.png`, 490, 125],
    ['land', `${CMWN.MEDIA.SPRITE}sprite.land.png`, 345, 245],
    ['fruits', `${CMWN.MEDIA.SPRITE}sprite.fruits.png`, 120, 105],
    ['flowers', `${CMWN.MEDIA.SPRITE}sprite.flowers.png`, 190, 180],
    ]);

    loadAssets.call(this, 'atlas', [
        [
            'butterfly',
            `${CMWN.MEDIA.SPRITE}monarchsprite.png`,
            `${CMWN.MEDIA.SPRITE}monarchsprite.json`
        ],
        [
            'crow',
            `${CMWN.MEDIA.SPRITE}crowflyingsprite.png`,
            `${CMWN.MEDIA.SPRITE}crowflyingsprite.json`
        ],
        [
            'star',
            `${CMWN.MEDIA.SPRITE}starsprite.png`,
            `${CMWN.MEDIA.SPRITE}starsprite.json`
        ],
    ]);

    loadAssets.call(this, 'audio', [
    ['egg', `${CMWN.MEDIA.EFFECT}EggDrop.mp3`],
    ['obstacle', `${CMWN.MEDIA.EFFECT}BumpObstacles.mp3`],
    ['bird', `${CMWN.MEDIA.EFFECT}Bird.mp3`],
    ['flower', `${CMWN.MEDIA.EFFECT}PowerFlower.mp3`],
    ['water', `${CMWN.MEDIA.EFFECT}Drop.mp3`],
    ['cloud', `${CMWN.MEDIA.EFFECT}Cloud.mp3`],
    ['wind', `${CMWN.MEDIA.EFFECT}Wind.mp3`],
    ['star', `${CMWN.MEDIA.EFFECT}StarFact.mp3`],
    ['speed', `${CMWN.MEDIA.EFFECT}SpeedBKG.mp3`],
    ]);
}
