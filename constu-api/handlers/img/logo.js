import logo from 'logo.svg'

const cache = {}

/**
 * Here I just wanted to have some fun with randomly generated logos
 * because, well, kitten photos are looking not quite appropriate as
 * a construction companies logos. ¯\_(ツ)_/¯
 */
export async function getLogo(req, res) {
    const { filename } = req.params
    res.header('Content-Type', 'image/svg+xml')
    let image = cache[filename]
    if (!image) {
        image = generateLogo(filename)
        cache[filename] = image
    }
    res.send(image)
}

function generateLogo(filename) {
    const logoSymbols = filename
        .split('-')
        .map((word) => word[0])
        .join('')
    const colorIndividually = Math.random() > 0.5
    const options = {
        // add a space at the end, because txt2svg doesn't always get width right
        logo: logoSymbols + ' ',
        x: 45,
        font: randomOf(fonts).toLowerCase(),
        divided: colorIndividually,
        ...generateFills(colorIndividually),
    }

    return logo.generate(options)
}

/**
 * @param {boolean} manyPaths
 * @returns {object}
 */
function generateFills(manyPaths) {
    const result = { path: { fill: randomOf(colors) } }
    if (manyPaths) {
        for (let i = 0; i < 5; i++) {
            result[`path${i}`] = { fill: randomOf(colors) }
        }
    }
    return result
}

/**
 * returns a random element of array
 * @param {Array} arr
 */
function randomOf(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

const fonts = [
    'blocked.ttf',
    'gubblebum-blocky.ttf',
    'gubblebum.ttf',
    'mk-zodnig-square.ttf',
    'origami-mommy-pixellated.ttf',
    'origami-mommy.ttf',
]
const colors = [
    '#cb3837',
    '#c6e03c',
    '#fc428f',
    '#cea2fd',
    '#fb3f24',
    '#3cc8f6',
    '#ff3e74',
]
