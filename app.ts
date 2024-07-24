import { CClass } from "./circleclasses";
import { CClass as NonCircleCClass } from "./noncircleclasses/cclass";

const nonCircleC = new NonCircleCClass();
nonCircleC.run();

const c = new CClass();
c.run();
