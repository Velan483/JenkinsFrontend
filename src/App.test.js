import { render, screen } from '@testing-library/react';
import AddStudent from './AddStudent';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import AddAttendance from './AddAttendance';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

describe('Add Student Test',()=>{ 

  test('renders Add Student data', () => {
    render(<AddStudent />);
    const linkElement = screen.getByText('ADD STUDENT DATA');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders name lable', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('namelable');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders name', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('name');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
  });

  test('renders department lable', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('deplable');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders department', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('dep');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
  });

  test('renders section lable', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('seclable');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders section', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('sec');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
  });

  test('renders Attendance lable', () => {
    render(<AddStudent />);
    const linkElement = screen.getByRole('attlable');
    expect(linkElement).toBeInTheDocument();
  });

  it("renders 'add submit button' ", () => {
    render(<AddStudent />);
    const linkElement = screen.getByTestId("add-submit");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
  });
})

describe('Add Attendance Test',()=>{ 

    test('renders Add Attendance data', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByText('ADD ATTENDANCE DATA');
      expect(linkElement).toBeInTheDocument();
    });
  
    test('renders date lable', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('datelable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders date', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('date');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders day lable', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('daylable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders day', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('day');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    test('renders attendance lable', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('attendlable');
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders attendance', () => {
      render(<AddAttendance />);
      const linkElement = screen.getByRole('attend');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("");
    });
  
    it("renders 'add submit button' ", () => {
      render(<AddAttendance />);
      const linkElement = screen.getByTestId("addattend-submit");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("Submit");
    });
  })