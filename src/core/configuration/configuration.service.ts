import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ConfigurationServiceObject } from './configuration.service.object'

@Injectable()
export class ConfigurationService {
  constructor(private manager: ConfigService) {}

  get(key: string, valueDefault?: string): string {
    return this.manager.get(key, valueDefault)
  }

  getPort(): number {
    return this.manager.get(ConfigurationServiceObject.Key.PORT, 3000)
  }

  getNumber(key: string, valueDefault?: number): number {
    return this.manager.get<number>(key, valueDefault)
  }

  getBoolean(key: string, valueDefault?: boolean): boolean {
    return this.manager.get<boolean>(key, valueDefault)
  }

  getEnvironment(): ConfigurationServiceObject.Environment {
    const value = this.get(
      ConfigurationServiceObject.Key.ENVIRONMENT,
      ConfigurationServiceObject.Environment.DEVELOPMENT,
    )

    return value as ConfigurationServiceObject.Environment
  }

  getClientBaseUrl(): string {
    return this.manager.get(ConfigurationServiceObject.Key.CLIENT_BASE_URL)
  }

  isEnvironmentDevelopment(): boolean {
    return (
      this.getEnvironment() ===
      ConfigurationServiceObject.Environment.DEVELOPMENT
    )
  }

  isEnvironmentProduction(): boolean {
    return (
      this.getEnvironment() ===
      ConfigurationServiceObject.Environment.PRODUCTION
    )
  }
}
