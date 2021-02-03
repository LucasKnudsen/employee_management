import { render, screen } from '@testing-library/react';
import EmployeeModal from '../components/EmployeeModal';

let mockedResponse = {
  "id": 1,
  "email": "george.bluth@reqres.in",
  "first_name": "George",
  "last_name": "Bluth",
  "avatar": "https://reqres.in/img/faces/1-image.jpg"
}

beforeEach(() => {
  render(<EmployeeModal employee={ mockedResponse }/>)
})

it('Dimmers body on modal click', () => {

})