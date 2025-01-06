import {
  ColorfulPanel,
  ColorfulPanelGroup,
  ColorfulPanelResizer,
} from "../colorful/ColorfulPanels";

export function NestedExample() {
  return (
    <ColorfulPanelGroup orientation="horizontal" style={{ height: 400 }}>
      <ColorfulPanel id="left" color="green" min="10%">
        left
      </ColorfulPanel>
      <ColorfulPanelResizer id="resizer-1" />
      <ColorfulPanel id="middle" min="270px">
        <ColorfulPanelGroup orientation="vertical" className="w-full">
          <ColorfulPanel id="top" color="pink" min="10%">
            Top
          </ColorfulPanel>
          <ColorfulPanelResizer id="resizer-3" />
          <ColorfulPanel id="bottom">
            <ColorfulPanelGroup orientation="horizontal" className="w-full">
              <ColorfulPanel color="blue" id="bottom-left" min="125px">
                middle left
              </ColorfulPanel>
              <ColorfulPanelResizer id="resizer-4" />
              <ColorfulPanel id="bottom-right" min="125px" color="orange">
                middle right
              </ColorfulPanel>
            </ColorfulPanelGroup>
          </ColorfulPanel>
        </ColorfulPanelGroup>
      </ColorfulPanel>
      <ColorfulPanelResizer id="resizer-2" />
      <ColorfulPanel color="red" id="right" min="10%">
        right
      </ColorfulPanel>
    </ColorfulPanelGroup>
  );
}
