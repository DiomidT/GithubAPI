import { TestBed } from '@angular/core/testing';

import { GitService } from './git.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GitService', () => {
  let service: GitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
