export const cLog = (title: string, value: any) => {
    const type = typeof value;
    switch (type) {
      case 'string':
        console.log(
          `\x1b[34m${title.trim()}:\x1b[0m \x1b[33m${value
            .toString()
            .trim()}\x1b[0m \n-----------------------------------------------------------------------------------------------`,
        );
        break;
      case 'object' || 'array':
        console.log(
          `\x1b[34m${title.trim()}:\x1b[0m \x1b[32m${JSON.stringify(
            value,
            null,
            2,
          )}\x1b[0m \n-----------------------------------------------------------------------------------------------`,
        );
        break;
    }
  };
  