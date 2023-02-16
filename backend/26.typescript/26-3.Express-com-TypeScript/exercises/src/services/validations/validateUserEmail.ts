import UserModel from '../../database/models/User';
import IUser from '../../interfaces/user.inteface';

const validateUserEmail = async (email: string): Promise<IUser | null> => {
  const user = await UserModel.findOne({ where: { email } });
  return user;
}

export default validateUserEmail;