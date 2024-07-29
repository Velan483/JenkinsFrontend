import { render, screen} from '@testing-library/react';
import View from './ViewStudent';
import ViewAttendance from './ViewAttendance';


jest.mock('axios');
jest.mock('react-router-dom');

describe('View Student Test',()=>{ 

    test('renders view Student data', () => {
      render(<View />);
      const linkElement = screen.getByText('Student Record Management');
      expect(linkElement).toBeInTheDocument();
    });

    it("renders 'add button' ", () => {
        render(<View />);
        const linkElement = screen.getByTestId("add-link");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Add +");
      });

      test('renders view Attendance data', () => {
        render(<ViewAttendance />);
        const linkElement = screen.getByText('Attendance Management');
        expect(linkElement).toBeInTheDocument();
      });
  
      it("renders 'Attendance add button' ", () => {
          render(<View />);
          const linkElement = screen.getByTestId("add-link");
          expect(linkElement).toBeInTheDocument();
          expect(linkElement).toHaveTextContent("Add +");
        });

    

});  