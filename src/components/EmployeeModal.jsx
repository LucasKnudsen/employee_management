import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const EmployeeModal = ({employee}) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>View Info</Button>}
    >

    </Modal>
  )
}

export default EmployeeModal