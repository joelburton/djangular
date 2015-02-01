A trivial Django app to show a simple RESTful integration with Angular.

To install::

  virtualenv venv
  source venv/bin/activate
  pip install -r requirements.txt
  python project/manage.py migrate
  python project/manage.py createsuperuser
  python project/maange.py runserver 

Then visit http://localhost:8000/admin, log in, and create at least one Cat object.

You can then visit http://localhost:8000/ for a single-page app.

You can visit http://localhost:8000/api for the API interface.


