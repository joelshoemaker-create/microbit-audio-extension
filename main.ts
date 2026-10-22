// Temporary test block for the audio extension.
// This confirms the extension can add a custom block.

namespace audioClips {
    /**
     * Shows a message to confirm the extension is loaded.
     */
    //% block="test audio clips extension"
    //% blockNamespace=audioClips
    export function testExtension(): void {
        basic.showString("OK")
    }
}