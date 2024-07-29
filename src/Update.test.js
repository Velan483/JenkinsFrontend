import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import EditStudent from './EditStudent';
import EditAttendance from './EditAttendance';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

describe('Update Attendance Test',()=>{ 

    test('renders Update Student data', () => {
      render(<EditStudent />);
      const linkElement = screen.getByText('UPDATE STUDENT DATA');
      expect(linkElement).toBeInTheDocument();
    });

    test('renders update id lable', () => {
        render(<EditStudent />);
        const linkElement = screen.getByRole('idlable');
        expect(linkElement).toBeInTheDocument();
      });
      
      test('renders update id', () => {
        render(<EditStudent />);
        const linkElement = screen.getByRole('id');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
      });
  
    test('renders update name lable', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('namelable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders updatename', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('name');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders update department lable', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('deplable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders update department', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('dep');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders update section lable', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('seclable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders update section', () => {
      render(<EditStudent />);
      const linkElement = screen.getByRole('sec');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    it("renders 'update submit button' ", () => {
      render(<EditStudent />);
      const linkElement = screen.getByTestId("update");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("Update");
    });
  })

  describe('Update Attendance Test',()=>{ 

    test('renders Update Student data', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByText('UPDATE ATTENDANCE DATA');
      expect(linkElement).toBeInTheDocument();
    });

    test('renders update aid lable', () => {
        render(<EditAttendance />);
        const linkElement = screen.getByRole('aidlable');
        expect(linkElement).toBeInTheDocument();
      });
      
      test('renders update aid', () => {
        render(<EditAttendance />);
        const linkElement = screen.getByRole('aid');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
      });
  
    test('renders update Attendance date lable', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('adatelable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders update Attendance date', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('adate');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders update Attendance day lable', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('adaylable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders update Attendance day', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('aday');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders update Attendance lable', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('alable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders update Attendance', () => {
      render(<EditAttendance />);
      const linkElement = screen.getByRole('attend');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    it("renders 'Attendance update  button' ", () => {
      render(<EditAttendance />);
      const linkElement = screen.getByTestId("update-att");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("Update");
    });
  })