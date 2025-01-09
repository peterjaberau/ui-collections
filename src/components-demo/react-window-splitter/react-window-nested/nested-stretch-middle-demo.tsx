import {
    ColorfulPanel,
    ColorfulPanelGroup,
    ColorfulPanelResizer,
} from "@/plugins/react-window-splitter/colorful/ColorfulPanels";


export function NestedStretchMiddleDemo() {
    return (
        <ColorfulPanelGroup orientation="horizontal" style={{ height: 400 }}>
            <ColorfulPanel id="left" color="green" min="10%">
                left
            </ColorfulPanel>


            <ColorfulPanelResizer id="resizer-1" />
            <ColorfulPanel color="blue" id="middle" min="10%">
                middle
            </ColorfulPanel>

            <ColorfulPanelResizer id="resizer2" />
            <ColorfulPanel color="red" id="right" min="10%">
                right
            </ColorfulPanel>
        </ColorfulPanelGroup>
    );
}
