collapsed: 
only first three time show
no text box or save btn

<div class="timeBlock rounded row" id="time9">
      <div class="timeBox border border-dark rounded col d-flex ">
        <p class="m-auto ">9:00</p>
      </div>
      <ol class="tasks mt-3 col-8">
        <li>9:00 - first task</li>
        <li>9:10 - first task</li>
        <li>9:20 - first task</li>
        <li hidden>9:30 - first task</li>
        <li hidden>9:40 - first task</li>
        <li hidden>9:50 - first task</li>
        <li hidden>9:60 - first task</li>
      </ol>
      <div class="timeBtns col-3 text-center m-auto">
        <button class="yesBtn btn btn-success"><i class="bi bi-check2-square"></i></i></button>
        <button class="noBtn btn btn-danger"><i class="bi bi-x-square"></i></button>
        <button class="editBtn btn btn-warning"><i class="bi bi-pencil-square"></i></button>
      </div>
      <div class="inner" hidden>
        <textarea name="task" id="taskarea"></textarea>
        <button class="saveBtn btn btn-success"><i class="bi bi-save"></i></button>
      </div>
    </div>

expandedn:

<div class="timeBlock rounded row shadow rounded" id="time9">
      <div class="timeBox shadow-sm rounded col-1 d-flex ">
        <p class="m-auto ">9:00</p>
      </div>
      <div class="middle col-11">
        <ol class="tasks w-100 mt-3">
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:00</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:10</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:20</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:30</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:40</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
          <li class="innerli row shadow-sm mr-3 rounded">
            <p class="timeFrameMinutes m-auto col-1">9:50</p>
            <p class="task m-auto col-8">
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            <div class="timeBtnsExpanded text-center m-0 col-3 align-middle">
              <button class="yesBtn btn btn-success shadow-sm"><i class="bi bi-check2-square"></i></i></button>
              <button class="noBtn btn btn-danger shadow-sm"><i class="bi bi-x-square"></i></button>
              <button class="editBtn btn btn-warning shadow-sm"><i class="bi bi-pencil-square"></i></button>
            </div>
          </li>
        </ol>
        <div class="expanded m-3">
          <select class="align-middle shadow-sm rounded" name="timeselect" id="timeselect">time
            <option value="9:00">9:00</option>
            <option value="9:00">9:10</option>
            <option value="9:00">9:20</option>
            <option value="9:00">9:30</option>
            <option value="9:00">9:40</option>
            <option value="9:00">9:50</option>
          </select>
          <input type="text" class="align-middle shadow-sm rounded" id="taskarea" maxlength="83"
            placeholder="Enter your task here">
          <button class="shadow-sm saveBtn btn btn-success align-middle"><i class="bi bi-save"></i></button>
        </div>
      </div>
      <div hidden class="timeBtns col-3 text-center m-auto">
        <button class="yesBtn btn btn-success"><i class="bi bi-check2-square"></i></i></button>
        <button class="noBtn btn btn-danger"><i class="bi bi-x-square"></i></button>
        <button class="editBtn btn btn-warning"><i class="bi bi-pencil-square"></i></button>
      </div>
    </div>