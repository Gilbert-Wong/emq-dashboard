PROJECT = emqttd_dashboard
PROJECT_DESCRIPTION = emqttd web dashboard
PROJECT_VERSION = 2.0

DEPS = gen_conf lager emqttd
LOCAL_DEPS = mnesia

dep_gen_conf = git https://github.com/emqtt/gen_conf
dep_emqttd   = git https://github.com/emqtt/emqttd plus

ERLC_OPTS += +'{parse_transform, lager_transform}'

COVER = true

include erlang.mk

app:: rebar.config
