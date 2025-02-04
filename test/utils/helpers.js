/**
 * Purpose: Generate random credentials for testing
 * @returns {Object} - Returns an object with email and password
 */
export function generateRandomCredentials() {
  const email = `test${Math.floor(Math.random() * 100000)}@example.com`; // Simplified email
  const password = "TestPassword@123";
  return { email, password };
}
