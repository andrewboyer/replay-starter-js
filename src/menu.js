import { makeSprite, t } from "@replay/core";

export const Menu = makeSprite({
  render({ props, device }) {
    const { inputs } = device;

    if(inputs.pointer.justReleased || inputs.keysJustPressed[" "]) {
      // callback function takes existing state modifies it
      // then it sends it back to the calling function to render the new frame
      props.start();
    }

    return [
      t.text({
        text: device.isTouchScreen
          ? "Tap to start"
          : "Click or Space Bar to Start",
        color: "white",
        y: 100,
      }),
    ];

  },
});
