import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
// import Navbar from '../../components/Navbar';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/Card';
import { Button } from '../../components/Button';

const mockCourses = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    code: 'CS101',
    credits: 3,
    description: 'An introductory course covering the basics of computer science and programming.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'Advanced Mathematics',
    code: 'MATH301',
    credits: 4,
    description: 'A deep dive into advanced mathematical concepts and their applications.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'World History',
    code: 'HIST201',
    credits: 3,
    description: 'An overview of major historical events and their impact on global civilization.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 4,
    title: 'English Literature',
    code: 'ENG202',
    credits: 3,
    description: 'A survey of important works in English literature from various periods and genres.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 5,
    title: 'Biology 101',
    code: 'BIO101',
    credits: 4,
    description: 'An introduction to the fundamental principles of biology and life sciences.',
    image: '/placeholder.svg?height=200&width=300',
  },
];

export default function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating an API call to fetch courses
    setTimeout(() => {
      setCourses(mockCourses);
    }, 500);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar 
        setActivePage={() => {}} 
        setShowLogin={() => {}} 
        user={null} 
        onLogout={() => {}}
      /> */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Course Catalog</h1>
        <div className="mb-6">
          <Label htmlFor="search">Search Courses</Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              id="search"
              placeholder="Search by course title or code"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Course Code: {course.code}</p>
                <p className="text-sm text-gray-600 mb-4">Credits: {course.credits}</p>
                <p className="text-sm">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}