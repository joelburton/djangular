# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50, unique=True, help_text='Full name.')),
                ('iq', models.PositiveSmallIntegerField(help_text='Just pretend.')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
