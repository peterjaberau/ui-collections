import { Box } from '@/components/Box'
import { Button } from '@/components/ui-shadcn/button'
import { Slider } from '@/components/ui-shadcn/slider'
import { Switch } from '@/components/ui-shadcn/switch'
import { Label } from '@/components/ui-shadcn/label'





const ShadcnDemos = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex space-x-8 ">
          <Box title="Button Demo">
            <Button />
          </Box>

          <Box title="Slider Demo">
            <Slider />
          </Box>


          <Box title="Switch Demo">
            <Switch />
          </Box>
        </div>

      </div>

      <div className="space-y-8">
        <div className="flex space-x-8">
          <Box title="Label Demo">
            <Label />
          </Box>
        </div>
      </div>

        </>
        )
        }

        export default ShadcnDemos