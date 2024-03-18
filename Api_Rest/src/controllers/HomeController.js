/* eslint-disable no-unused-vars */
class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
