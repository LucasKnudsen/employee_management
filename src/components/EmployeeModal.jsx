import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const EmployeeModal = ({employee}) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button floated="right" size="tiny">More Info</Button>}
    >
      <Modal.Header>More about { employee.first_name }</Modal.Header>
      <Modal.Content>
        <Image classNamesize='medium' src={employee.avatar} wrapped />
        <Modal.Description>
          <Header>{`${employee.first_name} ${employee.last_name}`}</Header>
          <p>
            Email: { employee.email}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button>
          Edit
        </Button>
        <Button>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EmployeeModal