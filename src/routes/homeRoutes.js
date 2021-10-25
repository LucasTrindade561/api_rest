import { Router } from 'express'; // importando apenas o router dos express
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
