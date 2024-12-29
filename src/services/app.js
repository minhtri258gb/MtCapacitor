
class AppService {

  log(origin, data, enable = true) {

    if (!mtConfig.DEBUG || !enable || data == null)
      return;

    console.log(origin, data);
  }

};
window.mtApp = new AppService();