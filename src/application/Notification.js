/**
 * LLD Concept: Dependency Injection
 * This service doesn't care HOW the message is sent (Email, SMS, Slack).
 * It just knows it has a 'provider' that implements a send() method.
 */
class NotificationService {
  constructor(provider) {
    this.provider = provider; // This is the 'Adapter'
  }

  async sendAlert(message) {
    console.log(`[App Layer] Preparing alert: ${message}`);
    return await this.provider.send(message);
  }
}

export default NotificationService;
