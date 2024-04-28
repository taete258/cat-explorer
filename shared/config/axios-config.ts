import axios from 'axios';
import axiosRetry from 'axios-retry';
export const axiosInstance = axios.create({
    timeout: 10000,
    timeoutErrorMessage: 'TimeOut',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      "x-api-key":
        'live_3IZozCCTIN2Ud8QqOm3hUh7CVA7rgZfmqWEfe3eUyvi0bt4w7UCUuFoy7cDnwHXO',
    },
  });

  axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: retryCount => {
      return retryCount * 500;
    },
    onRetry(retryCount, error, requestConfig) {
      console.log({retryCount, error, requestConfig});
    },
  });