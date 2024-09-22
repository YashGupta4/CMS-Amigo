import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Mail, Lock, User } from 'lucide-react';
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/Card"
import { login, register } from '../api/auth';

export default function LoginPage({ onLogin, onContinueAsGuest }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      let user;
      if (isRegistering) {
        console.log('Attempting to register:', { username, email });
        user = await register(username, email, password);
      } else {
        console.log('Attempting to login:', { identifier });
        user = await login(identifier, password);
      }
      console.log('Response:', user);
      if (user) {
        onLogin(user);
      } else {
        setError(isRegistering ? 'Registration failed: No user data received' : 'Login failed: No user data received');
      }
    } catch (err) {
      console.error(isRegistering ? 'Registration error:' : 'Login error:', err);
      setError(err.message || `An error occurred during ${isRegistering ? 'registration' : 'login'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="p-4">
        <h1 className="text-3xl font-bold text-blue-800">AMIGO</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Bringing The Real-world Classroom Experience at Your Doorstep</h2>
            <img src="https://amigolms.amityonline.com/pluginfile.php/1/theme_moove/headerimg/1630925265/banner-1.svg" alt="Online learning illustration" className="w-full" />
          </div>
          <Card className="md:w-1/2 max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{isRegistering ? 'Register' : 'Login'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {isRegistering && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Input
                            id="username"
                            placeholder="Enter username"
                            type="text"
                            required
                            className="pl-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Input
                            id="email"
                            placeholder="Enter email"
                            type="email"
                            required
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {!isRegistering && (
                    <div className="space-y-2">
                      <Label htmlFor="identifier">Username or Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input
                          id="identifier"
                          placeholder="Enter username or email"
                          type="text"
                          required
                          className="pl-10"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        required
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? (isRegistering ? 'Registering...' : 'Logging in...') : (isRegistering ? 'Register' : 'Log in')}
                </Button>
              </form>
              <Button onClick={onContinueAsGuest} className="w-full mt-4 bg-gray-300 text-gray-800 hover:bg-gray-400">
                Continue without login
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-sm text-blue-600 hover:underline mb-2"
              >
                {isRegistering ? 'Already have an account? Log in' : 'Don\'t have an account? Register'}
              </button>
              <Link to="/forgot-credentials" className="text-sm text-blue-600 hover:underline">
                Forgotten your username or password?
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>PROUDLY MADE WITH AMIGO LMS</p>
      </footer>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onContinueAsGuest: PropTypes.func.isRequired,
};