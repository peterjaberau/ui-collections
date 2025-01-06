import { useMemo, useRef } from "react";
import { spring } from "framer-motion";
import {
  ColorfulPanel,
  ColorfulPanelGroup,
  ColorfulPanelResizer,
} from "../colorful/ColorfulPanels";
import { Button } from  "antd";
import type { PanelHandle } from "../";

export function CustomCollapseAnimation() {
  const panelHandle = useRef<PanelHandle>(null);
  const springFn = useMemo(() => {
    return spring({
      keyframes: [0, 1],
      velocity: 0.0,
      stiffness: 100,
      damping: 10,
      mass: 1.0,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Button
        onClick={() => {
          if (panelHandle.current?.isExpanded()) {
            panelHandle.current?.collapse();
          } else {
            panelHandle.current?.expand();
          }
        }}
      >
        Toggle
      </Button>
      <ColorfulPanelGroup style={{ height: 200 }}>
        <ColorfulPanel color="blue" id="panel-1" min="100px">
          1
        </ColorfulPanel>
        <ColorfulPanelResizer id="resizer-2" />
        <ColorfulPanel
          handle={panelHandle}
          id="panel-10"
          color="orange"
          min="40%"
          collapsible
          collapsedSize="60px"
          defaultCollapsed
          collapseAnimation={{
            easing: (t: any) => springFn.next(t * 1000).value,
            duration: 1000,
          }}
        >
          2
        </ColorfulPanel>
      </ColorfulPanelGroup>
    </div>
  );
}
