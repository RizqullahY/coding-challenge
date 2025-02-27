function getSize(width, height, depth) {
        const surface = 2 * (width * height) +  2 * (width * depth) +  2 * (depth * height);
        const volume = width * height * depth;
        return [surface, volume]
}