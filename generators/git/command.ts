/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { JHipsterCommandDefinition } from '../../lib/command/index.js';

const command: JHipsterCommandDefinition = {
  configs: {
    skipGit: {
      description: 'Skip git repository initialization',
      cli: {
        type: Boolean,
      },
      scope: 'generator',
    },
    forceGit: {
      description: 'Force commit to git repository',
      cli: {
        type: Boolean,
      },
      scope: 'generator',
    },
    monorepository: {
      description: 'Use monorepository',
      cli: {
        type: Boolean,
      },
      scope: 'storage',
    },
  },
};

export default command;
