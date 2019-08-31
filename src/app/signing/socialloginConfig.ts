import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

export function getAuthServiceConfigs(){
    let config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("693741105724-eii13tgucibo4pidihugp9chdvbs8a8m.apps.googleusercontent.com")
        }
    ]);
    return config;
}