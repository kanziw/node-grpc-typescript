class Logger {
  public info(...args: any[]): void {
    console.info(...args)
  }

  public warn(...args: any[]): void {
    console.warn(...args)
  }

  public error(...args: any[]): void {
    console.error(...args)
  }
}

export default new Logger()
