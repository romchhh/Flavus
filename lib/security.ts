// Rate limiting storage
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  clientId: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientId);

  if (!clientData || now > clientData.resetTime) {
    // Reset or initialize
    rateLimitStore.set(clientId, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (clientData.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  clientData.count++;
  rateLimitStore.set(clientId, clientData);
  return { allowed: true, remaining: maxRequests - clientData.count };
}

export function containsDangerousPatterns(content: string): boolean {
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /data:text\/html/i,
    /vbscript:/i,
  ];

  return dangerousPatterns.some((pattern) => pattern.test(content));
}

export function validateJsonInput(
  input: string,
  maxLength: number
): { valid: boolean; error?: string } {
  if (input.length > maxLength) {
    return { valid: false, error: `Input exceeds maximum length of ${maxLength} characters` };
  }

  try {
    JSON.parse(input);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: 'Invalid JSON format' };
  }
}
