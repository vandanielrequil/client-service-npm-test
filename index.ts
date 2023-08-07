import logger from "@vandaniel/logger";
import { SomeServiceThatUseLogger } from "@vandaniel/service_that_use_logger";

const sstul = new SomeServiceThatUseLogger(logger);

sstul.doFoo();