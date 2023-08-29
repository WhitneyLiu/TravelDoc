import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_eN64CucQC",
    ClientId: "3c0e8g0ik16qfat86gvettp0lu",
};

export default new CognitoUserPool(poolData);