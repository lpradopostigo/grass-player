export interface GrassAudio {
    new(): GrassAudio

    setFile(path: string): void;

    setFileFromMemory(buffer: Buffer): void;

    play(): void;

    pause(): void;

    stop(): void;

    setPosition(position: number): void;

    getPosition(): number;

    setVolume(volume: number): void;
}

module.exports = require('./bin/grass_audio.node').GrassAudio as GrassAudio


