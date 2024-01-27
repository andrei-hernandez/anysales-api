import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-firebase-jwt"
import * as firebase from "firebase-admin"

const firebaseCredentials = {
  type: process.env.TYPE,
  projectId: process.env.PROJECT_ID,
  privateKeyId: process.env.PRIVATE_KEY_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
  clientId: process.env.CLIENT_ID,
  authUri: process.env.AUTH_URL,
  tokenUri: process.env.TOKEN_URI,
  authProviderX509CertUrl: process.env.AUTH_PROVIDER,
  clientC509CertUrl: process.env.CLIENT_URL
}

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  "firebase-auth"
) {
  private defaultApp: firebase.app.App
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    })

    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebaseCredentials)
    })
  }

  async validate(token: string): Promise<firebase.auth.DecodedIdToken> {
    const firebaseUser = await this.defaultApp
      .auth()
      .verifyIdToken(token, true)
      .catch(err => {
        throw new UnauthorizedException(err.message)
      })

    if (!firebaseUser) throw new UnauthorizedException()

    return firebaseUser
  }
}
