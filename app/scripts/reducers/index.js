import app from './app';
import user from './user';
import item from './item';
import request from './request';

export default {
  ...app,
  ...user,
  ...item,
  ...request,
};
